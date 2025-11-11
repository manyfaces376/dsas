export interface ITodo {
id: number,
title: string,
status: boolean
}

export interface ITodoProps extends ITodo {
setStatus: () => void
deleteTodo: () => void 
}