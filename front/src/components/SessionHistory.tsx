// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// const SessionHistory = () => {
//   const [sessions, setSessions] = useState([]);

//   const userId = localStorage.getItem('user_id') || 'jerome123';

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const res = await fetch(`http://localhost:8000/get_sessions/${userId}`);
//         const data = await res.json();
//         setSessions(data.sessions);
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


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SessionHistory = () => {
  const sessions = [
    { date: '2024-03-20', therapist: 'Dr. Smith', duration: '15 min', therapy_used: 'CBT' },
    { date: '2024-03-18', therapist: 'Dr. Maya', duration: '3 min', therapy_used: 'Mindfulness' },
    { date: '2024-03-15', therapist: 'Dr. John', duration: '14 min', therapy_used: 'Talk Therapy' },
    { date: '2024-03-10', therapist: 'Dr. Smith', duration: '6 min', therapy_used: 'CBT' },
  ];

  return (
    <Card className="glass-card h-full overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-mental-700">Previous Sessions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto h-[calc(100%-60px)]">
          <Table>
            <TableHeader className="bg-mental-50/50">
              <TableRow>
                <TableHead className="text-mental-700">Date</TableHead>
                <TableHead className="text-mental-700">Therapist</TableHead>
                <TableHead className="text-mental-700">Duration</TableHead>
                <TableHead className="text-mental-700">Focus Area</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session, idx) => (
                <TableRow key={idx} className="hover:bg-mental-50/50">
                  <TableCell className="font-medium">{session.date}</TableCell>
                  <TableCell>{session.therapist}</TableCell>
                  <TableCell>{session.duration}</TableCell>
                  <TableCell>{session.therapy_used}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionHistory;
