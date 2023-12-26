const actions: { [key: string]: any } = {}
/// 这里是给主进程使用的注册函数
export function registerAction (name: string, handler: Function) {
  actions[name] = handler
}

export function getAction (name: string) {
  return actions[name]
}
