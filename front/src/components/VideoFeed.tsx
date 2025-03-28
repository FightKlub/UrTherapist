import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, VideoOff, Mic, MicOff } from 'lucide-react';
import axios from 'axios';
import Webcam from 'react-webcam';

const VideoFeed = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const webcamRef = useRef(null);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleVideo = async () => {
    if (isVideoOn) {
      streamRef.current?.getTracks().forEach(track => track.stop());
      setIsVideoOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        setIsVideoOn(true);
        setTimeout(captureSnapshot, 3000);
      } catch (err) {
        console.error('Camera access denied', err);
      }
    }
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
  };

  const captureSnapshot = async () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (!screenshot) return;

    const byteString = atob(screenshot.split(',')[1]);
    const mimeString = screenshot.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });

    try {
      const formData = new FormData();
      formData.append('file', blob, 'face.jpg');

      const res = await axios.post('http://localhost:8000/emotion-from-face/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { emotion, reply } = res.data;

      // Send the reply to chat via custom event
      const event = new CustomEvent('add-chat', {
        detail: {
          sender: 'ai',
          text: reply
        }
      });
      window.dispatchEvent(event);
    } catch (err) {
      console.error('Emotion detection failed', err);
    }
  };

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <Card className="glass-card w-full h-full flex">
      <CardContent className="p-3 flex-1 flex flex-col">
        <div className="relative flex-1 rounded-md bg-mental-100/50 flex items-center justify-center overflow-hidden mb-3">
          {isVideoOn ? (
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              className="h-full w-full object-cover rounded-md"
              videoConstraints={{ facingMode: 'user' }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-mental-200/80 flex items-center justify-center">
                <span className="text-3xl font-semibold text-mental-600">MH</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${isVideoOn ? 'bg-mental-600 text-white hover:bg-mental-700' : 'bg-mental-100 hover:bg-mental-200'}`}
            onClick={toggleVideo}
          >
            {isVideoOn ? <Video size={18} /> : <VideoOff size={18} />}
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`rounded-full ${isAudioOn ? 'bg-mental-600 text-white hover:bg-mental-700' : 'bg-mental-100 hover:bg-mental-200'}`}
            onClick={toggleAudio}
          >
            {isAudioOn ? <Mic size={18} /> : <MicOff size={18} />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoFeed;
