export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, messageText } = req.body;

    const token = "7648208519:AAEwgHlVg0dRLpSyGgrvU9yqMUaWx8V6bP8";
    const chatId = "1294320723";
    const text = `
  ✉️ *New Contact Form Submission*

  👤 *Name:* ${name}
  📧 *Email:* ${email}
  📝 *Message:* ${messageText}
    `;

    try {
      const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      });

      if (!telegramRes.ok) throw new Error("Failed to send Telegram message");

      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}