const AuthWrapper = ({children, label, props, formikKey}) => {
    return (
        <div>
            <p>{label}</p>
            {children}
            <p>{props.touched[formikKey] && props.errors[formikKey]}</p>
        </div>
    )
}

export const AuthInput = ({label, props, formikKey, ...rest}) => {
    return (
        <AuthWrapper
            label={label}
            formikKey={formikKey}
            props={props}>
            <input
                onChange={props.handleChange(formikKey)}
                onBlur={props.handleBlur(formikKey)}
                {...rest} />
        </AuthWrapper>
    )
}

export const AuthPasswordInput = ({label, props, formikKey, ...rest}) => {
    return (
        <AuthWrapper
            label={label}
            formikKey={formikKey}
            props={props}>
            <input
                type="password"
                onChange={props.handleChange(formikKey)}
                onBlur={props.handleBlur(formikKey)}
                {...rest} />
        </AuthWrapper>
    )
}

export const AuthTextArea = ({label, props, formikKey, ...rest}) => {
    return (
        <AuthWrapper
            label={label}
            formikKey={formikKey}
            props={props}>
            <textarea
                style={{overflowWrap: 'break-word'}}
                onChange={props.handleChange(formikKey)}
                onBlur={props.handleBlur(formikKey)}
                {...rest} />
        </AuthWrapper>
    )
}
