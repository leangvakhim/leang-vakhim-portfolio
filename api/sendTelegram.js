export default async function handler(req, res) {
    // CORS handling
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your domain instead of "*"
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Reject all methods other than POST
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, messageText } = req.body;

    const token = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";
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