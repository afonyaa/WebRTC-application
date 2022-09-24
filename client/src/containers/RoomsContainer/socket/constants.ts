export const ACTIONS = {
  /** Присоедниение клиента к комнате */
  JOIN: 'join',
  /** Отсоединение клиента из комнаты */
  LEAVE: 'leave',
  /** Поделится доступными комнатами для клиента */
  SHARE_ROOMS: 'share-rooms',
  /** Создание нового соединения между клиентами */
  ADD_PEER: 'add-peer',
  /** Передача данных sdp */
  RELAY_SDP: 'relay-sdp',
  /** Передача ice кандидатов */
  RELAY_ICE: 'relay-ice',
  /** реагирование на передачу ice кандидатов */
  ICE_CANDIDATE: 'ice-candidate',
  /** Получение sdp */
  SESSION_DESCRIPTION: 'session-description',
};
