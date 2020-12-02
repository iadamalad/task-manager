const high = "#ff0000";
const medium = "#ff8c00";
const low = "#ffff00";

const data = [
  {
    id: 1,
    status: "To-Do",
    title: "Taskaasasasasas",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    assignedPerson: "Adam",
    priorityColor: high,
    startDate: "2020-11-24T10:30",
    endDate: "2020-11-24T10:30",
  },
  {
    id: 2,
    status: "To-Do",
    title: "Task 2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    assignedPerson: "David",
    priorityColor: medium,
    startDate: "2020-11-24T10:30",
    endDate: "2020-11-24T10:30",
  },
  {
    id: 3,
    status: "To-Do",
    title: "Task 3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    assignedPerson: "Niraj",
    priorityColor: low,
    startDate: "2020-11-24T10:30",
    endDate: "2020-11-24T10:30",
  },
  {
    id: 4,
    status: "To-Do",
    title: "Task 4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    assignedPerson: "Tracy",
    priorityColor: high,
    startDate: "2020-11-24T10:30",
    endDate: "2020-11-24T10:30",
  },
];

const statuses = [
  {
    status: "To-Do",
  },
  {
    status: "Doing",
  },
  {
    status: "Done",
  },
  {
    status: "Archive",
  },
];

export { data, statuses };
