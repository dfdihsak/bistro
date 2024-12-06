const styles = {
  xs: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2',
  sm: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  md: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8',
  lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8',
}

import clsx from 'clsx'


export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}



export function Container2({
  size = 'sm',
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { size?: keyof typeof styles }) {
  return <div className={clsx(styles[size], className)} {...props} />
}
