export class Telegram {
    static BOT_TOKEN = '7606053605:AAFN9-4LX64XcmaTBKbYW6SHnOckO7XcfTQ'; 
    static CHAT_ID = '6041802496'; 

    static async sendMessage({message, name, email}) {
        const apiUrl = `https://api.telegram.org/bot${Telegram.BOT_TOKEN}/sendMessage`;
        try {
          const formattedMessage = `
E-mail: ${email}; 
Name: ${name}; 
Msg: ${message}`;
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
              chat_id: Telegram.CHAT_ID,
              text: formattedMessage,
            }),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(`Error: ${data.description}`);
          }
    
          return data;
        } catch (error) {
          console.error('Ошибка отправки сообщения в Telegram:', error);
          throw error;
        }
      }
}