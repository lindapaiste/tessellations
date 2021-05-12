import React, {PropsWithChildren} from "react";

export const FlexTiles = ({children}: PropsWithChildren<{}>) => (
    <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    }}>
        {children}
    </div>
)
export const Group = ({title, subtitle, children}: PropsWithChildren<{ title: string; subtitle?: string }>) => (
    <section>
        <h2>{title}</h2>
        {subtitle ? <h3>{subtitle}</h3> : null}
        <FlexTiles>
            {children}
        </FlexTiles>
    </section>
)