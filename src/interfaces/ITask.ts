export type TStatus = 'pending ' | 'done ' | ' '


export interface ITask {
  id: string
  content: string
  status: TStatus
}