const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;
    const msg = new Message({
      chat: chatId,
      sender: req.userId,
      text,
    });
    await msg.save();
    res.json(msg);
  } catch (e) {
    res.status(400).json({ message: "Error sending message" });
  }
};
