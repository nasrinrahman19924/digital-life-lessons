export const getLessons = async () => {
  const response = await fetch("/api/lessons");

  return response.json();
};

export const addLesson = async (data) => {
  const response = await fetch("/api/lessons", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return response.json();
};
