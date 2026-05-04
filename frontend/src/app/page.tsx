"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Danh sách phòng trọ</h1>

      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4 mb-3" key={room.id}>
            <div className="card p-3">
              <h5>{room.title}</h5>
              <p>Giá: {room.price}</p>
              <p>{room.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}