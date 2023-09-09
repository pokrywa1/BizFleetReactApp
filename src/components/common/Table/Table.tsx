import _TableContainer from './Container.tsx'
import _TableRow from './Row.tsx'
import { _TableControls } from './Controls.tsx'
import _DeleteButton, { _PureButton } from './Buttons.tsx'

export const Table = {
  Container: _TableContainer,
  Row: _TableRow,
  Controls: _TableControls,
  Button: {
    Delete: _DeleteButton,
    Pure: _PureButton,
  },
}
