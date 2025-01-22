enum ModalStatus {
  Opened,
  Closed,
}

const buildModal = (text: string, status: ModalStatus) => {
  return { text, status };
};

console.log(buildModal("Hello", ModalStatus.Opened));
