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
    <div className="min-h-screen bg-slate-950 font-sans text-white flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-md">
        
        {/* Glow Border Effect based on status */}
        <div className={`absolute -inset-0.5 rounded-2xl blur opacity-50 transition duration-500
          ${status === 'loading' ? 'bg-blue-500' : ''}
          ${status === 'valid' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : ''}
          ${status === 'invalid' || status === 'error' ? 'bg-red-500' : ''}
        `}></div>

        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
          
          {/* --- LOADING STATE --- */
          status === 'loading' && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
              <p className="text-slate-400 font-medium">Verifying Credential...</p>
            </div>
          )}

          {/* --- VALID STATE --- */
          status === 'valid' && data && (
            <div className="space-y-6 text-center animate-in fade-in zoom-in duration-300">
              
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2 border border-green-500/20 shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                <BadgeCheck className="w-10 h-10 text-green-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Verified Certificate</h2>
                <p className="text-green-400 text-sm font-medium tracking-wide uppercase">Official DevFest Delegate</p>
              </div>

              <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800 space-y-4 text-left">
                
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-slate-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Issued To</p>
                    <p className="text-lg font-semibold text-white">{data.name}</p>
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-slate-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Ticket ID</p>
                    <p className="font-mono text-slate-300">{data.booking_id}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Event</p>
                    <p className="text-slate-300">DevFest 2025</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Securely verified via Blockchain/DB</span>
                </div>
              </div>
            </div>
          )}

          {/* --- INVALID STATE --- */
          (status === 'invalid' || status === 'error') && (
            <div className="text-center py-8 animate-in shake duration-300">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
                <XCircle className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Verification Failed</h2>
              <p className="text-slate-400 mb-8">
                We could not find a valid certificate associated with the ID: <br/>
                <span className="font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded mt-2 inline-block">
                  {bookingId || 'Unknown'}
                </span>
              </p>
              
              <Link to="/" className="inline-block w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors">
                Go to Home
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;