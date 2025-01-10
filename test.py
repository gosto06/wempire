from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Oyunu başlatır ve Web App bağlantısını sunar."""
    keyboard = [
        [
            InlineKeyboardButton("Çiçeğimi Yetiştir 🌱", web_app={"url": "https://gosto06.github.io/wempire/"})
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        "Hoş geldin! Çiçeğini büyütmek için aşağıdaki bağlantıya tıkla:",
        reply_markup=reply_markup
    )

def main():
    TOKEN = "7610113600:AAHjT7w9RBvPxT0EJThPuUrnfZB2FyfkQmk"
    application = Application.builder().token(TOKEN).build()

    # Komut işleyiciler
    application.add_handler(CommandHandler("start", start))

    # Botu çalıştır
    print("Bot çalışıyor...")
    application.run_polling()

if __name__ == "__main__":
    main()
