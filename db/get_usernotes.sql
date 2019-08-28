SELECT notes.* FROM notes
INNER JOIN users ON notes.username = users.username
WHERE users.username = $1