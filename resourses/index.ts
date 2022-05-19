import stagingMode from './staging'
import productionMode from './production'

const resouceMode = (process.env.MODE_ENV === 'staging') ? stagingMode : productionMode

export default resouceMode
