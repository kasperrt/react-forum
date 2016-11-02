var posts = [
  {
    id: "post_hash1",
    title: "Ironing",
    description: "I can't for the life of me find out how to iron a shirt?",
    time_posted: "2016-11-02T12:32:44+01:00",
    author_id: "u3",
    comments: [
      {id: "comment_hash1", comment_text: "This is a comment", time_posted: "2016-11-02T12:32:44+01:00", author: "bob poopmaster"},
      {id: "comment_hash2", comment_text: "This is also a comment", time_posted: "2016-11-02T12:32:44+01:00", author: "travis scott"},
      {id: "comment_hash3", comment_text: "This is not a comment", time_posted: "2016-11-02T12:32:44+01:00", author: "bob poopmaster"}
    ]
  },
  {
    id: "post_hash2",
    title: "Parenting",
    description: "How to I wipe my kids' snot, and how do I parent?",
    time_posted: "2016-12-02T12:32:44+01:00",
    author_id: "u2",
    comments: [
      {id: "comment_hash1", comment_text: "This is a comment", time_posted: "2016-11-02T12:32:44+01:00", author: "bob poopmaster"}
    ]
  }
];

module.exports = posts;
