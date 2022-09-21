export default (cb: (data: { width: number, isMobileView: boolean }) => {}) => {
  let width, isMobileView

  width = window.innerWidth
  isMobileView = width < 1024

  cb({ width, isMobileView })

  window.addEventListener('resize', () => {
    width = window.innerWidth
    isMobileView = width < 1024

    cb({ width, isMobileView })
  })
}