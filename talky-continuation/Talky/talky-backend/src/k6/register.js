import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  vus: 100,
  duration: "10s",
};

export default function () {
    const body = JSON.stringify({
        username: "Abiii Whitney",
        email: "whitney@gmail.com",
        password: "12345678",
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    http.post("http://localhost:8000/user/login", body, params);

    sleep(1); //delay of one second
}

