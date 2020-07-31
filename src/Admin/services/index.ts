import { AdminWashingMachinesType, WashingMachinesObj } from '../stores/types'

interface AdminServiceInterface {
   getWashingMachinesAPI: () => Promise<AdminWashingMachinesType>
}

export default AdminServiceInterface
