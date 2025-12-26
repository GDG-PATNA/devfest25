import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Assuming you use react-router
import { 
  Loader2, 
  BadgeCheck, 
  XCircle, 
  ShieldCheck, 
  Calendar,
  User,
  Ticket
} from 'lucide-react';

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEtNxmjg6OMu_iQNKcJ0-bw9K51k-HTmH_Be_5Vw_8pbvc0hqoKHpf1n8iWmxyeaYYRryZ_vquQryw/pub?gid=0&single=true&output=csv";

/* ---------------- UTIL ---------------- */
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    return headers.reduce((obj, key, i) => {
      obj[key] = values[i];
      return obj;
    }, {});
  });
}

const VerifyCertificate = () => {
  const { bookingId } = useParams(); // Get ID from URL
  const [status, setStatus] = useState('loading'); // loading | valid | invalid | error
  const [data, setData] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      if (!bookingId) {
        setStatus('invalid');
        return;
      }

      try {
        const res = await fetch(CSV_URL);
        const text = await res.text();
        const records = parseCSV(text);
        
        // Find record (case insensitive comparison)
        const record = records.find(r => 
          r.booking_id && r.booking_id.trim().toLowerCase() === bookingId.trim().toLowerCase()
        );

        if (record) {
          setData(record);
          setStatus('valid');
        } else {
          setStatus('invalid');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
    };

    verifyUser();
  }, [bookingId]);

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans text-gray-900 flex justify-center pt-24 p-4 overflow-hidden">

  {/* Background Decorative Blobs */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[100px]" />
    <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />
  </div>

  {/* Main Card */}
  <div className="relative w-full max-w-md">

    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">

      {/* --- LOADING STATE --- */}
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-gray-600 font-medium">
            Verifying Certificate...
          </p>
        </div>
      )}

      {/* --- VALID STATE --- */}
      {status === "valid" && data && (
        <div className="space-y-6 text-center animate-in fade-in zoom-in duration-300">

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-200">
            <BadgeCheck className="w-10 h-10 text-green-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Certificate Verified
            </h2>
            <p className="text-green-600 text-sm font-medium">
              Official DevFest Delegate
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-5 text-left">

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Issued To
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {data.name}
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            <div className="flex items-start gap-3">
              <Ticket className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </p>
                <p className="font-mono text-gray-700">
                  {data.booking_id}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Event
                </p>
                <p className="text-gray-700">
                  DevFest 2025
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Securely verified via official records</span>
            </div>
          </div>
        </div>
      )}

      {/* --- INVALID / ERROR STATE --- */}
      {(status === "invalid" || status === "error") && (
        <div className="text-center py-8 animate-in fade-in duration-300">

          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-200">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Verification Failed
          </h2>

          <p className="text-gray-600 mb-8">
            We couldn’t find a valid certificate for the ID:
            <br />
            <span className="font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded inline-block mt-2">
              {bookingId || "Unknown"}
            </span>
          </p>

          <Link
            to="/"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition shadow-md"
          >
            Go Back Home
          </Link>
        </div>
      )}

    </div>
  </div>
</div>

  );
};

export default VerifyCertificate;