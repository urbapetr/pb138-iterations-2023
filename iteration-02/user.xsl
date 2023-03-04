<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:include href="message.xsl" />

    <xsl:template match="user">
        <div>
            <span>
                <xsl:value-of select="@id" />
            </span>
            <span>
                <xsl:value-of select="username" />
            </span>
            <span>
                <xsl:value-of select="handle" />
            </span>
            <span>
                <xsl:value-of select="email" />
            </span>
            <span>
                <xsl:value-of select="password" />
            </span>
        </div>
        <div>
            <h3>Messages:</h3>
            <xsl:apply-templates select="messages/message" />
        </div>
    </xsl:template>

</xsl:stylesheet>