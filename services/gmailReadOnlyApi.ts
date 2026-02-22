   const baseURL = "https://gmail.googleapis.com";

export async function getApiResponce(endPoint: string) {
    if(endPoint === ""){
        endPoint = "/gmail/v1/users/me/messages";
    }
  try {
    const response = await fetch(`${baseURL}${endPoint}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${process.env.GMAIL_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("API Response Status: ", response.status);
    const data = await response.json();
    console.log("API Response Data: ", data);
    return data;
    
  } catch (error) {
    console.error("Failed to fetch Gmail messages:", error);
  }
};

export async function getEmailSubject() {
    const messages = await getApiResponce("");
    const latestMessageId= messages.messages[0].id;    
    const emailDetails = await getApiResponce(`/gmail/v1/users/me/messages/${latestMessageId}`);
    const subject= emailDetails.payload.headers.find((header: { name: string; }) => header.name === "Subject")?.value;
    return subject;
}
