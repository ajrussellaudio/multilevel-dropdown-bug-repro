import { Dropdown } from 'react-multilevel-dropdown';

export function NamedExport() {
  const doSomething = () => console.log('lol hi');

  return (
    <Dropdown title="Dropdown title">
      <Dropdown.Item onClick={() => doSomething()}>Item 1</Dropdown.Item>
      <Dropdown.Item>
        Item 2
        <Dropdown.Submenu>
          <Dropdown.Item>Subitem 1</Dropdown.Item>
          <Dropdown.Item>Subitem 2</Dropdown.Item>
        </Dropdown.Submenu>
      </Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown>
  );
}
