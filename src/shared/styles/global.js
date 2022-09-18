import { css, Global } from "@emotion/react";

export const globalStyles = (
    <Global
        styles={css`
            html {
                font-size: 62.5%;
            }

            body {
                font-size: 1.6rem;
                font-weight: 400;
                color: #000;
            }
        `}
    />
);
