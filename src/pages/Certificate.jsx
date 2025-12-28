import React, { useState } from "react";
import QRCode from "qrcode";
import {
  Search,
  Download,
  AlertCircle,
  Loader2,
  CheckCircle2,
  Ticket,
  Linkedin,
} from "lucide-react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEtNxmjg6OMu_iQNKcJ0-bw9K51k-HTmH_Be_5Vw_8pbvc0hqoKHpf1n8iWmxyeaYYRryZ_vquQryw/pub?gid=0&single=true&output=csv"; // Add your CSV URL here

// 1. Define both template URLs
const ATTENDEE_TEMPLATE_URL = "/certificate.png";
const VOLUNTEER_TEMPLATE_URL = "/volunteer-certificate.png"; // Ensure this file exists in your public folder

/* ---------------- CONFIGURATION ---------------- */
const QR_CONFIG = {
  x: 220,
  y: 1100,
  size: 200,
  color: "#000000",
  bgColor: "#ffffff00",
};

const LINKEDIN_CONFIG = {
  orgId: "43237565",
  certName: "DevFest Certificate", // Generic name, or you can make this dynamic
  orgName: "GDG Patna",
};

/* ---------------- UTIL ---------------- */
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    return headers.reduce((obj, key, i) => {
      obj[key] = values[i];
      return obj;
    }, {});
  });
}

/* ---------------- CANVAS ---------------- */
// 2. Accept 'type' as an argument
/* ---------------- CANVAS ---------------- */
async function generateCertificate(name, ticketId, type) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // 1. Determine type
  const recordType = type ? type.toLowerCase().trim() : "attendee";
  const isVolunteer = recordType === "volunteer";

  const img = new Image();
  // Select template based on type
  img.src = isVolunteer ? VOLUNTEER_TEMPLATE_URL : ATTENDEE_TEMPLATE_URL;
  img.crossOrigin = "Anonymous";

  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = (e) =>
      rej(new Error("Failed to load certificate template image"));
  });

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  // 2. Text Configuration
  ctx.font = "700 55px Inter, sans-serif";
  ctx.fillStyle = "#5f6368";
  ctx.textAlign = "center";
  const nameYPosition = 600;

  ctx.fillText(name, canvas.width / 2, nameYPosition);

  try {
    const domain = window.location.origin;
    const verificationUrl = `${domain}/certificate/${ticketId}`;
    const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
      margin: 1,
      color: {
        dark: QR_CONFIG.color,
        light: QR_CONFIG.bgColor,
      },
    });

    const qrImg = new Image();
    qrImg.src = qrDataUrl;
    await new Promise((res) => (qrImg.onload = res));

    ctx.drawImage(
      qrImg,
      QR_CONFIG.x,
      QR_CONFIG.y,
      QR_CONFIG.size,
      QR_CONFIG.size,
    );
  } catch (err) {
    console.error("Error generating QR", err);
  }

  return canvas.toDataURL("image/png");
}

/* ---------------- COMPONENT ---------------- */
export const Certificate = () => {
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(CSV_URL);
      if (!res.ok) throw new Error("Failed to fetch CSV data");

      const text = await res.text();
      const records = parseCSV(text);

      // Find record by booking_id
      const record = records.find((r) => r.booking_id === ticketId.trim());

      if (!record)
        throw new Error("Certificate not found. Please check your Ticket ID.");

      // 5. Pass record.type to the generator
      const imageUrl = await generateCertificate(
        record.name,
        record.booking_id,
        record.type, // Pass the type column here
      );

      setResult({
        name: record.name,
        url: imageUrl,
        ticketId: record.booking_id,
        // Make filename descriptive
        fileName: `DevFest_${record.type || "Attendee"}_Certificate_${record.name.replace(/\s+/g, "_")}.png`,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkedInClick = () => {
    if (!result) return;

    const domain = window.location.origin;
    const verificationUrl = `${domain}/certificate/${result.ticketId}`;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const params = new URLSearchParams({
      startTask: "CERTIFICATION_NAME",
      name: LINKEDIN_CONFIG.certName,
      organizationId: LINKEDIN_CONFIG.orgId,
      organizationName: LINKEDIN_CONFIG.orgName,
      issueYear: year.toString(),
      issueMonth: month.toString(),
      certId: result.ticketId,
      certUrl: verificationUrl,
    });

    window.open(
      `https://www.linkedin.com/profile/add?${params.toString()}`,
      "_blank",
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans selection:bg-blue-500/20 text-gray-900 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Hero Text */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="relative flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-blue-700">
                Official Downloads Live
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
              Generate Your <br />
              <span className="text-blue-600">DevFest Certificate</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Thank you for being part of the community. Enter your Booking ID
              below to generate, verify, and download your official
              participation certificate.
            </p>
          </div>

          {/* Right Side: Card */}
          <div className="relative">
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
              {!result ? (
                /* --- SEARCH STATE --- */
                <form onSubmit={handleSearch} className="space-y-8">
                  <div className="text-center space-y-2 mb-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                      <Ticket className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Retrieve Certificate
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Enter the ID sent to your email
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      value={ticketId}
                      onChange={(e) => setTicketId(e.target.value)}
                      className="block w-full px-4 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="e.g. CERTIFICATE-ID-XXXX"
                      required
                    />

                    <button
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <span>Find Certificate</span>
                          <Search className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                </form>
              ) : (
                /* --- RESULT STATE --- */
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">
                      Certificate Generated Successfully
                    </span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                    <img
                      src={result.url}
                      alt="Generated Certificate"
                      className="w-full object-cover"
                    />
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Download Button */}
                    <a
                      href={result.url}
                      download={result.fileName}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>

                    {/* LinkedIn Button */}
                    <button
                      onClick={handleLinkedInClick}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
                    >
                      <Linkedin className="w-4 h-4" />
                      Add to LinkedIn
                    </button>

                    <button
                      onClick={() => setResult(null)}
                      className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                    >
                      Back to Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Issues with your ID?{" "}
                <a
                  href="https://t.me/gdgpatna"
                  className="text-blue-600 hover:underline"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
