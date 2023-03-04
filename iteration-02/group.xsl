<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="group">
        <xsl:text>{</xsl:text>
        
            <xsl:text>"id": </xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>,</xsl:text>
            
            <xsl:text>"groupname": "</xsl:text>
            <xsl:value-of select="groupname" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"description": "</xsl:text>
            <xsl:value-of select="description" />
            <xsl:text>",</xsl:text>
            
            <xsl:text>"members": [</xsl:text>
            <xsl:apply-templates select="members/member" />
            <xsl:text>],</xsl:text>
            
            <xsl:text>"posts": [</xsl:text>
            <xsl:apply-templates select="posts/post" />
            <xsl:text>]</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

    <xsl:template match="member">
        <xsl:text>{</xsl:text>
        
            <xsl:text>"id": </xsl:text>
            <xsl:value-of select="@id" />
            <xsl:text>,</xsl:text>
            
            <xsl:text>"username": "</xsl:text>
            <xsl:value-of select="@username" />
            <xsl:text>"</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

    <xsl:template match="post">
        <xsl:text>{</xsl:text>
        
            <xsl:text>"id": "</xsl:text>
            <xsl:value-of select="@id" />
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
            
            <xsl:text>"post": "</xsl:text>
            <xsl:value-of select="normalize-space(text())" />
            <xsl:text>"</xsl:text>
            
        <xsl:text>}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>,</xsl:text>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>