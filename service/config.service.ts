export const getData = async (endpoint: string) => {
  const data = await fetch(`http://localhost:3001/${endpoint}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmxvc0BjYXJsb3MuY29tIiwiaWF0IjoxNzA2Mjc1MDYwLCJleHAiOjE3MDYzMTEwNjB9.vahWpg0aANo7nbLNziQcqe-JQja9LvtF_F8yjH3S-T8",
    },
  });
  return data.json();
};

export const postData = async (endpoint: string, body: any) => {
  const data = await fetch(`http://localhost:3001/${endpoint}`, {
    method: "POST",
    body,
  });
  return data.json();
};
