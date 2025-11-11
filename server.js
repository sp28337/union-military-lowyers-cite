import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error, success) => {
  if (success) {
    console.log('✅ SMTP сервер готов к отправке писем');    
  } else {
    console.error('❌ Ошибка подключения SMTP:', error);
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !subject || !message) {
      return res.status(400).json({ 
        error: 'Заполните все обязательные поля' 
      });
    }

    if (email && !email.includes('@')) {
      return res.status(400).json({ 
        error: 'Некорректный email адрес' 
      });
    }

    console.log('📨 Получена новая заявка:', { name, phone, email, subject });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sp28337@yandex.ru',
      subject: `🔔 Новая заявка: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #164e3b;">📌 Новая заявка от клиента</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Email:</strong> ${email || 'не указан'}</p>
          <p><strong>Тема:</strong> ${subject}</p>
          <h3>Сообщение:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    });

    console.log('✅ Письмо администратору отправлено');

    if (email) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Мы получили вашу заявку',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Спасибо за вашу заявку, ${name}!</h2>
            <p>Мы получили вашу заявку и уже её рассматриваем.</p>
            <p>Мы свяжемся с вами по номеру <strong>${phone}</strong>.</p>
          </div>
        `
      });

      console.log('✅ Подтверждение отправлено клиенту');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Заявка успешно отправлена!' 
    });

  } catch (error) {
    console.error('❌ Ошибка при обработке заявки:', error);
    res.status(500).json({ 
      error: 'Ошибка при отправке заявки' 
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running ✅' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`
  🚀 Сервер запущен на http://localhost:${PORT}
  📧 Готов обрабатывать заявки и отправлять письма
  `);
});
