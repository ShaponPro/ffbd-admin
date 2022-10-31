// ** React Imports
import { useState } from 'react';

import ButtonComponent from 'src/components/ButtonComponent';

// ** MUI Imports
import styled from '@emotion/styled';

const TabContainer = styled.div({
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '13px 20px',
  width: '100%',
  height: '66px',
  position: 'relative',
  background: '#ECF8FF',
  boxShadow: '1px 2px 3px rgba(22, 31, 41, 0.2)'
})

type Props = {
  options: object[];
  activekey: string;
  onChange?: (value: string) => void
  style?: React.CSSProperties
}

const TabbarComponent = (props: Props) => {
  // ** State
  const [active, setActive] = useState<string>('regular') // 

  /**
   * Handle OnClick Button
   */
  const onClickHandler = (key: string) =>{
    setActive(key);
    props.onChange(key);
  }

  return (
    <TabContainer style={props.style}>
      {props.options.length ? props.options.map((item, i)=>(
        <ButtonComponent type='tabButton' title={item.title} path={item.path} isActive={item.key === active} onClick={()=>onClickHandler(item.key)}/>
      )) : null}
    </TabContainer>
  )
}

export default TabbarComponent

TabbarComponent.defaultProps = {
  options: [
  {
    key: "regular",
    title: "Regular",
    path: "/videos/list-videos/user-videos",
  },
  {
    key: "monetization",
    title: "Active Monetization",
    path: "/videos/list-videos/user-videos",
  },
  {
    key: "trending",
    title: "Trending",
    path: "/videos/list-videos/user-videos",
  },
  {
    key: "customized",
    title: "Customized",
    path: "/pages/demopages",
  },
],
  activekey: "regular",
  onChange: (key: string) => null,
  style: {}
}
