const MobileUsers = () => {
  return (
    <>
      <div>Mobile Users</div>
      {[{ name: 'Lohn' }].map((item: any) => <p key={1}>{item}</p>) /* error boundary demonstration */}
    </>
  )
}

export default MobileUsers
