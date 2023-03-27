<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="message">
        {        
            "id": "<xsl:value-of select="@id" />",            
            "thread_id": "<xsl:value-of select="@thread_id" />",            
            "sent": "<xsl:value-of select="@sent" />",            
            <xsl:variable name="reply_to" select="@reply_to"/>
            "reply_to": 
            <xsl:choose>
                <xsl:when test="$reply_to != ''">
                    "<xsl:value-of select="@reply_to" />"
                </xsl:when>
                <xsl:otherwise>
                    null
                </xsl:otherwise>
            </xsl:choose>
            ,
            <xsl:variable name="edited" select="@edited"/>
            "edited": 
            <xsl:choose>
                <xsl:when test="$edited > 0">
                    true
                </xsl:when>
                <xsl:otherwise>
                    false
                </xsl:otherwise>
            </xsl:choose>
            ,            
            "message": "<xsl:value-of select="normalize-space(text())" />"            
        }
        <xsl:if test="position() != last()">
            ,
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>