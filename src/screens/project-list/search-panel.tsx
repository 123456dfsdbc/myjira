import React from 'react';

export interface User {
  id: string,
  name: string,
  personId: string,
  organization: string,
  created: string
}
// 定义接口规范
interface SearchPanelProps {
  users: User[], // 定义users为User类型的数组
  param: {
    name: string;
    personId: string;
  },
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {

  return (
    <form>
      <div>
        {/* setParam等价于：setParam(Object.assign({},param,{name:evt.target.value})) */}
        <input type="text" value={param.name} onChange={evt => setParam({
          ...param,
          name: evt.target.value
        })} />
        <select value={param.personId} onChange={evt => setParam({
          ...param,
          personId: evt.target.value
        })} >
          <option value={''}>负责人</option>
          {
            users.map(user => <option key={user.id} value={user.id} >{user.name}</option>)
          }
        </select>
      </div>
    </form>
  );
}
