import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({
      createdAt: -1,
    }); // newest first

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) return res.status(404).json({ message: "Note Not Found!" });

    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const note = await Note.create({
      title,
      content,
      user: req.user?.id, // optional
    });

    res.status(201).json(note);
  } catch (error) {
    console.error("Create note error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updateNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, content },
      { new: true }
    );

    if (!updateNote) return res.status(404).json({ message: "Note Not Found" });

    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deleteNote = await Note.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deleteNote) return res.status(404).json({ message: "Note Not Found" });

    res.json({ message: "Note Deleted Sccessfully" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
}
