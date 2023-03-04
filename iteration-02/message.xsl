<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="message">
        <xsl:text>{</xsl:text>
        
            <xsl:text>"id": "</xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"thread_id": "</xsl:text>
            <xsl:value-of select="@thread_id" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"sent": "</xsl:text>
            <xsl:value-of select="@sent" />
            <xsl:text>",</xsl:text>
            
            <xsl:variable name="reply_to" select="@reply_to"/>
            <xsl:text>"reply_to": </xsl:text>
            <xsl:choose>
                <xsl:when test="$reply_to != ''">
                    <xsl:text>"</xsl:text>
                    <xsl:value-of select="@reply_to" />
                    <xsl:text>"</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:text>null</xsl:text>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text>,</xsl:text>

            <xsl:variable name="edited" select="@edited"/>
            <xsl:text>"edited": </xsl:text>
            <xsl:choose>
                <xsl:when test="$edited">
                    <xsl:text>true</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:text>false</xsl:text>
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text>,</xsl:text>
            
            <xsl:text>"message": "</xsl:text>
            <xsl:value-of select="normalize-space(text())" />
            <xsl:text>"</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>