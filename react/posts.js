var posts = [
  {
    id: "post_hash1",
    title: "Ironing",
    description: "I can't for the life of me find out how to iron a shirt?",
    time_posted: "11. jan",
    author_id: "u3",
    comments: [
      {id: "comment_hash1", comment_text: "This is a comment", time_posted: "11. jan", author: "bob poopmaster"},
      {id: "comment_hash2", comment_text: "This is also a comment", time_posted: "11. jan", author: "travis scott"},
      {id: "comment_hash3", comment_text: "This is not a comment", time_posted: "12. jan", author: "bob poopmaster"}
    ]
  },
  {
    id: "post_hash2",
    title: "Parenting",
    description: "How to I wipe my kids snot, and how do I parent?",
    time_posted: "12. jan",
    author_id: "u2",
    comments: [
      {id: "comment_hash1", comment_text: "This is a comment", time_posted: "11. jan", author: "bob poopmaster"}
    ]
  }
];

module.exports = posts;
