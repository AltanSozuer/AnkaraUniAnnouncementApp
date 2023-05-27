import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export default function AtomSkeleton({
    viewBox,
    backgroundColor,
    foregroundColor,
    animate,
    speed,
    children
}) {
    return (
        <ContentLoader viewBox={viewBox} 
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor} 
            animate={animate}
            speed={speed}>
            {children}
        </ContentLoader>
    )
};
