import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { PEER_CONNECTION_CONFIG } from '@containers/P2PCallContainer/constants';

export const P2PCallContainer: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [iceCandidates, setIceCandidates] = useState([]);
  const localVideoRef = useRef<HTMLVideoElement>();
  const remoteVideoRef = useRef<HTMLVideoElement>();
  const rtcPeerConnection = useRef<RTCPeerConnection>();

  const initLocalVideoRef = useCallback((localVideoNode: HTMLVideoElement) => {
    localVideoRef.current = localVideoNode;
    window.navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => {
          rtcPeerConnection.current?.addTrack(track, stream);
        });
      });
  }, []);

  const initRemoteVideoRef = useCallback(
    (remoteVideoNode: HTMLVideoElement) => {
      remoteVideoRef.current = remoteVideoNode;
    },
    []
  );

  const setLocalDescriptionAndCreateOffer = () => {
    rtcPeerConnection.current
      ?.createOffer({ offerToReceiveVideo: true })
      .then((sdp) => {
        rtcPeerConnection.current?.setLocalDescription(sdp);
        setInputValue(JSON.stringify(sdp));
      });
  };

  const setRemoteDescription = () => {
    rtcPeerConnection.current?.setRemoteDescription(
      new RTCSessionDescription(JSON.parse(inputValue))
    );
  };

  const createAnswer = () => {
    rtcPeerConnection.current
      ?.createAnswer({ offerToReceiveVideo: true })
      .then((sdp) => {
        rtcPeerConnection.current?.setLocalDescription(sdp);
        setInputValue(JSON.stringify(sdp));
      });
  };

  const addIceCandidate = () => {
    rtcPeerConnection.current?.addIceCandidate(
      new RTCIceCandidate(JSON.parse(inputValue))
    );
  };

  useEffect(() => {
    rtcPeerConnection.current = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    rtcPeerConnection.current.onicecandidate = (e) => {
      setIceCandidates((prev) => [...prev, e.candidate]);
    };
    rtcPeerConnection.current.onconnectionstatechange = (e) => {
      console.log(e);
    };
    rtcPeerConnection.current.ontrack = (e) => {
      const [remoteStream] = e.streams;
      remoteVideoRef.current.srcObject = remoteStream;
    };
  }, []);

  return (
    <div className={'h-screen bg-slate-900 flex p-4 justify-around'}>
      <div>
        <video
          className={'w-[32rem] h-[32rem] bg-black'}
          autoPlay
          ref={(node) => initLocalVideoRef(node as HTMLVideoElement)}
        />
        <div className={'mt-6 flex gap-4'}>
          <Button
            title={'Set local desc and create Offer'}
            onClick={setLocalDescriptionAndCreateOffer}
          />
          <Button title={'Answer'} onClick={createAnswer} />
        </div>
        <Input
          variant={'outlined'}
          placeholder={'Input'}
          className={'mt-6 max-w-xl'}
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <div className={'mt-6 flex gap-4'}>
          <Button
            variant={'outlined'}
            title={'Set Remote Description'}
            onClick={setRemoteDescription}
          />
          <Button title={'Add ICE candidate'} onClick={addIceCandidate} />
        </div>
        <div className={'max-w-xl'}>
          <ul className={'text-slate-500 pt-8'}>Ice candidates: </ul>
          {iceCandidates.map((candidate) => (
            <li className={'text-slate-300 mb-4'}>
              {JSON.stringify(candidate)}
            </li>
          ))}
        </div>
      </div>
      <div>
        <video
          className={'w-[32rem] h-[32rem] bg-black'}
          autoPlay
          ref={(node) => initRemoteVideoRef(node)}
        />
      </div>
    </div>
  );
};
