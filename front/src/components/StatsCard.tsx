// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { useAuthValue } from '@/pages/AuthContext';

// const SessionHistory = () => {
//   const [sessions, setSessions] = useState([]);
//   const { currentUser } = useAuthValue();
//   const userId = currentUser?.email || 'guest@demo.com';

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/get_sessions/${userId}`);
//         setSessions(res.data.sessions);
//       } catch (error) {
//         console.error('Failed to fetch sessions:', error);
//       }
//     };

//     fetchSessions();
//   }, [userId]);

//   return (
//     <Card className="glass-card h-full overflow-hidden">
//       <CardHeader className="pb-2">
//         <CardTitle className="text-lg font-medium text-mental-700">Previous Sessions</CardTitle>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="overflow-auto h-[calc(100%-60px)]">
//           <Table>
//             <TableHeader className="bg-mental-50/50">
//               <TableRow>
//                 <TableHead className="text-mental-700">Date</TableHead>
//                 <TableHead className="text-mental-700">Therapist</TableHead>
//                 <TableHead className="text-mental-700">Duration</TableHead>
//                 <TableHead className="text-mental-700">Focus Area</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {sessions.map((session, idx) => (
//                 <TableRow key={idx} className="hover:bg-mental-50/50">
//                   <TableCell className="font-medium">{session.date || 'N/A'}</TableCell>
//                   <TableCell>{session.therapist || 'Dr. Smith'}</TableCell>
//                   <TableCell>{session.duration || '45 min'}</TableCell>
//                   <TableCell>{session.therapy_used || 'General Therapy'}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default SessionHistory;

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatsCard = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <Card className="glass-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-mental-700">Session Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span className="text-mental-700">Session Duration</span>
          <span className="bg-mental-100 px-2 py-1 rounded-md text-sm font-semibold">{formatTime(seconds)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mental-700">Mood Score</span>
          <span className="bg-mental-100 px-2 py-1 rounded-md text-sm font-semibold">7.5/10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mental-700">Focus Level</span>
          <span className="bg-mental-100 px-2 py-1 rounded-md text-sm font-semibold">High</span>
        </div>
        <div className="flex justify-between">
          <span className="text-mental-700">Therapist</span>
          <span className="bg-mental-100 px-2 py-1 rounded-md text-sm font-semibold">Dr. Smith</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
