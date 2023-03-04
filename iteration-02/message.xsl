<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="message">
            <id>
                <xsl:value-of select="@id" />
            </id>
            <thread_id>
                <xsl:value-of select="@thread_id" />
            </thread_id>
            <sent>
                <xsl:value-of select="@sent" />
            </sent>
            <reply_to>
                <xsl:value-of select="@reply_to" />
            </reply_to>

            <edited>
                <xsl:value-of select="@edited" />
            </edited>
            <message>
                <xsl:value-of select="content" />
            </message>
    </xsl:template>

</xsl:stylesheet>