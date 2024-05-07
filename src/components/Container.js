import './container.css'

export const Container = ({variant = 'mid', children}) => {

    console.log(variant)

    return (
        <div className={[variant + 'Container']}>
            {children}
        </div>
    )
}