import ActionDropdownWithButtons from './components/ActionDropdownWithButtons'

Nova.booting((app, store) => {
  app.component('ActionDropdown', ActionDropdownWithButtons)
})
