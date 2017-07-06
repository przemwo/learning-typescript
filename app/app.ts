function startGame():void {
  let name: string | undefined = getInputValue('name');
  postName(name);
}
function postName(name?: string): void {
  let nameElement: HTMLElement | null = document.getElementById('postedName');
  nameElement!.innerText = `My name is: ${name}`;
}
function getInputValue(elementID: string): string | undefined {
  let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}
document.getElementById('start')!.addEventListener('click', startGame);
