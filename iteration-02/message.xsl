<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="message">
        <div>
            <span>
                <xsl:value-of select="@id" />
            </span>
            <span>
                <xsl:value-of select="@thread_id" />
            </span>
            <span>
                <xsl:value-of select="@sent" />
            </span>

            <p>
                <xsl:value-of select="content" />
                <xsl:if test="@edited='true'">
                    <small>edited</small>
                </xsl:if>
            </p>
            <span>
                <xsl:value-of select="@reply_to" />
            </span>
        </div>
    </xsl:template>

</xsl:stylesheet>