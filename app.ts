interface User {
  id: number;
  name: string;
  email: string;
}

async function loadUsers(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  const userList = document.getElementById("userList")!;
  userList.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}
