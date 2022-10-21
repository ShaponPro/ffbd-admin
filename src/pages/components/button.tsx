// ** MUI Imports
import { ButtonComponent } from 'src/components/ButtonComponent'



const Home = () => {
  

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
      </div>
      <div
        style={{
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
        }}
      >
        <ButtonComponent type='tabButton' title='Regular' isActive={false}/>
        <ButtonComponent type='tabButton' title='Regular' isActive={false}/>
        <ButtonComponent type='tabButton' title='Regular' isActive={false}/>
        <ButtonComponent type='tabButton' title='Regular' isActive={false}/>
        <ButtonComponent type='tabButton' title='Regular' isActive={false}/>
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='select-custom' title='select Filter/Field'/>
        <ButtonComponent type='select-custom' title='select Filter/Field'/>
        <ButtonComponent type='select-custom' title='select Filter/Field'/>
        <ButtonComponent type='select-custom' title='select Filter/Field'/>
      </div>

      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
      </div>
      <div style={{ display: 'flex', gap: '30px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='apply' title='Apply' />
        <ButtonComponent type='cancel' title='cancel' />
        <ButtonComponent title='default'/>
        <ButtonComponent type='tabButton2' title='Target Audience Edit' />
      </div>
    </div>
  )
}

export default Home