import React, { FC, useCallback, useEffect, useRef } from 'react';

export const VideoCallContainer: FC = () => {
  const localPlayerRef = useRef<HTMLVideoElement | null>();
  const remotePlayerRef = useRef<HTMLVideoElement | null>();

  const localStream = useRef<MediaStream>();
  const remoteStream = useRef<MediaStream>();
  const peerConnection = useRef<RTCPeerConnection>();

  const config = { iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }] };

  const createOffer = useCallback(async () => {
    peerConnection.current = new RTCPeerConnection(config);
    console.log(peerConnection.current);
    remoteStream.current = new MediaStream();
    if (remotePlayerRef.current) {
      remotePlayerRef.current.srcObject = remoteStream.current;
    }
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
  }, []); //clear deps

  const initLocalStream = useCallback(
    (node: HTMLVideoElement | null) => {
      localPlayerRef.current = node;
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localStreamData) => {
          if (localPlayerRef.current) {
            localStream.current = localStreamData;
            localPlayerRef.current.srcObject = localStreamData;

            createOffer().then(() => {
              console.log(peerConnection.current);
              localStream.current.getTracks().forEach((track) => {
                peerConnection.current.addTrack(
                  track,
                  localStream.current as MediaStream
                );
              });

              peerConnection.current.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                  remoteStream.current?.addTrack(track);
                });
              };

              peerConnection.current.onicecandidate = async (event) => {
                if (event.candidate) {
                  console.log('New ICE candidate:', event.candidate);
                }
              };
            });
          }
        });
    },
    [createOffer]
  );

  return (
    <div>
      <video
        autoPlay
        playsInline
        ref={(node) => {
          initLocalStream(node);
        }}
        controls
        className='w-[450px] h-[300px] bg-slate-900'
      />
      <br />
      <video
        autoPlay
        playsInline
        className='w-[450px] h-[300px] bg-slate-900'
      />
    </div>
  );
};
