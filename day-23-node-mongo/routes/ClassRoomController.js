const express = require("express");
const ClassRoom = require("../models/ClassRoom");
const app = express();

app.get("/class", async (req, res) => {
  const classRoom = await ClassRoom.find({});
  try {
    res.send(classRoom);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// app.get("/student/:id", async (req, res) => {
//   console.log("student", Student);
//   const students = await Student.findById(req.params.id);

//   try {
//     res.send(students);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// });


 app.post("/class", async (req, res) => {
    const classRoom = await ClassRoom.create(req.body);
    console.log("students", classRoom);
    try {
      res.send(classRoom);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }),

// app.delete("/student/:id", async (req, res) => {
//   const students = await Student.findByIdAndDelete(req.params.id);

//   try {
//     if (!students) res.status(404).send("not found");
//     res.status(200).send("Berhasil di hapus");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.delete("/student", async (req, res) => {
//   const students = await Student.deleteMany();

//   try {
//     if (!students) res.status(404).send("not found");
//     res.status(200).send("Berhasil di hapus semua isi collection");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.put("/student/:id", async (req, res) => {
//   const students = await Student.findByIdAndUpdate(req.params.id, req.body);
//   try {
//     await students.save();
//     res.status(200).send("berhasil mengubah data");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = app;
