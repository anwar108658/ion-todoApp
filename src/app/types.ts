export type TodoFilter = 'today' | 'overdue' | 'pending' | 'completed';

export interface Todo {
  id: string;
  title: string;
  dueDate: Date;
  image:string;
  comment:string;
  completed: boolean;
}

export interface todoSegment{
    id:number,
    name:TodoFilter,
    value:string,
    icon:string,
    color:string,
}